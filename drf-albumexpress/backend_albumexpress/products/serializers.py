from rest_framework import serializers
from .models import Category, Product, ProductExtra

class CategorySerializer(serializers.ModelSerializer):
    """Serializer for Category model"""
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'code']

class ProductExtraSerializer(serializers.ModelSerializer):
    """Serializer for ProductExtra model"""
    class Meta:
        model = ProductExtra
        fields = ['id', 'feature']

class ProductSerializer(serializers.ModelSerializer):
    """Serializer for Product model"""
    category_name = serializers.ReadOnlyField(source='category.name')
    category_code = serializers.ReadOnlyField(source='category.code')
    extras = ProductExtraSerializer(many=True, read_only=True)
    details = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'description', 'price', 'image', 
            'category', 'category_name', 'category_code', 'featured', 
            'show_on_homepage', 'show_on_landing', 'date_added', 
            'date_updated', 'material', 'pages', 'size', 'extras', 'details'
        ]

class ProductDetailSerializer(serializers.ModelSerializer):
    """Detailed serializer for Product model"""
    category = CategorySerializer(read_only=True)
    extras = ProductExtraSerializer(many=True, read_only=True)
    details = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'description', 'price', 'image', 
            'category', 'featured', 'show_on_homepage', 'show_on_landing', 
            'date_added', 'date_updated', 'material', 'pages', 'size', 
            'extras', 'details'
        ]

class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer for creating and updating products"""
    extras = serializers.ListField(
        child=serializers.CharField(max_length=200),
        write_only=True,
        required=False
    )
    
    class Meta:
        model = Product
        fields = [
            'name', 'description', 'price', 'image', 'category', 
            'featured', 'show_on_homepage', 'show_on_landing', 
            'material', 'pages', 'size', 'extras'
        ]
    
    def create(self, validated_data):
        extras_data = validated_data.pop('extras', [])
        product = Product.objects.create(**validated_data)
        
        # Create product extras
        for extra in extras_data:
            ProductExtra.objects.create(product=product, feature=extra)
        
        return product
    
    def update(self, instance, validated_data):
        extras_data = validated_data.pop('extras', None)
        
        # Update product fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update extras if provided
        if extras_data is not None:
            # Remove existing extras
            instance.extras.all().delete()
            # Create new extras
            for extra in extras_data:
                ProductExtra.objects.create(product=instance, feature=extra)
        
        return instance

