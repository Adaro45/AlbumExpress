from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product
from .serializers import (
    CategorySerializer, 
    ProductSerializer, 
    ProductDetailSerializer,
    ProductCreateUpdateSerializer
)

class CategoryViewSet(viewsets.ModelViewSet):
    """ViewSet for Category model"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class ProductViewSet(viewsets.ModelViewSet):
    """ViewSet for Product model"""
    queryset = Product.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'featured', 'show_on_homepage', 'show_on_landing']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'date_added', 'name']
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        elif self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductSerializer
    
    @action(detail=False)
    def featured(self, request):
        """Get featured products"""
        featured_products = Product.objects.filter(featured=True)
        serializer = self.get_serializer(featured_products, many=True)
        return Response(serializer.data)
    
    @action(detail=False)
    def homepage(self, request):
        """Get products for homepage"""
        homepage_products = Product.objects.filter(show_on_homepage=True)
        serializer = self.get_serializer(homepage_products, many=True)
        return Response(serializer.data)
    
    @action(detail=False)
    def landing(self, request):
        """Get products for landing page"""
        landing_products = Product.objects.filter(show_on_landing=True)
        serializer = self.get_serializer(landing_products, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def toggle_featured(self, request, slug=None):
        """Toggle featured status"""
        product = self.get_object()
        product.featured = not product.featured
        product.save()
        return Response({'status': 'featured status updated'})
    
    @action(detail=True, methods=['post'])
    def toggle_homepage(self, request, slug=None):
        """Toggle homepage status"""
        product = self.get_object()
        product.show_on_homepage = not product.show_on_homepage
        product.save()
        return Response({'status': 'homepage status updated'})
    
    @action(detail=True, methods=['post'])
    def toggle_landing(self, request, slug=None):
        """Toggle landing page status"""
        product = self.get_object()
        product.show_on_landing = not product.show_on_landing
        product.save()
        return Response({'status': 'landing page status updated'})

