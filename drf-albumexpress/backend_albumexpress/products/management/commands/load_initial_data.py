from django.core.management.base import BaseCommand
from products.models import Category, Product, ProductExtra
from django.core.files.base import ContentFile
import os
import requests
from django.utils.text import slugify
from datetime import datetime

class Command(BaseCommand):
    help = 'Load initial product data'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Starting to load initial data...'))
        
        # Create categories
        categories = [
            {'name': 'Bodas', 'code': 'wedding'},
            {'name': 'Quinceañeras', 'code': 'quinceanera'},
            {'name': 'Familias', 'code': 'family'},
            {'name': 'Profesional', 'code': 'professional'},
            {'name': 'Accesorios', 'code': 'accessories'},
        ]
        
        category_objects = {}
        for category in categories:
            cat, created = Category.objects.get_or_create(
                code=category['code'],
                defaults={
                    'name': category['name'],
                    'slug': slugify(category['name'])
                }
            )
            category_objects[category['code']] = cat
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created category: {cat.name}'))
            else:
                self.stdout.write(self.style.SUCCESS(f'Category already exists: {cat.name}'))
        
        # Initial products data
        products = [
            {
                'name': 'Álbum Premium Boda',
                'image': '/images/place-holder-boda-premium.jpg',
                'price': 1299,
                'category': 'wedding',
                'featured': True,
                'date': '2023-05-15',
                'description': 'Álbum de lujo para bodas con cubierta de cuero genuino y páginas de alta calidad. Incluye caja protectora a juego.',
                'details': {
                    'material': 'Cuero genuino',
                    'pages': 30,
                    'size': '30x30 cm',
                    'extras': ['Caja protectora', 'Grabado personalizado', 'Papel fotográfico premium'],
                },
            },
            {
                'name': 'Álbum Quinceañera Deluxe',
                'image': '/images/place-holder-quinceanera-deluxe.jpg',
                'price': 999,
                'category': 'quinceanera',
                'featured': True,
                'date': '2023-06-20',
                'description': 'Álbum especial para quinceañeras con detalles en rosa y dorado. Perfecto para preservar los recuerdos de este día tan especial.',
                'details': {
                    'material': 'Eco-cuero',
                    'pages': 25,
                    'size': '25x25 cm',
                    'extras': ['Detalles en dorado', 'Páginas temáticas', 'Espacio para dedicatorias'],
                },
            },
            {
                'name': 'Álbum Familiar Rústico',
                'image': '/images/place-holder-familiar-rustico.jpg',
                'price': 899,
                'category': 'family',
                'featured': False,
                'date': '2023-04-10',
                'description': 'Álbum con estilo rústico ideal para fotos familiares. Diseño cálido y acogedor que realza tus recuerdos más preciados.',
                'details': {
                    'material': 'Madera y tela',
                    'pages': 20,
                    'size': '28x22 cm',
                    'extras': ['Acabado rústico', 'Cordón decorativo', 'Papel texturizado'],
                },
            },
            {
                'name': 'Álbum Acrílico Profesional',
                'image': '/images/place-holder-boda-acrilico.jpg',
                'price': 1499,
                'category': 'professional',
                'featured': True,
                'date': '2023-07-05',
                'description': 'Álbum con portada de acrílico de alta transparencia, ideal para fotógrafos profesionales que buscan un acabado moderno y elegante.',
                'details': {
                    'material': 'Acrílico y aluminio',
                    'pages': 30,
                    'size': '30x30 cm',
                    'extras': ['Portada personalizable', 'Acabado brillante', 'Esquinas reforzadas'],
                },
            },
            {
                'name': 'Álbum Boda Vintage',
                'image': '/images/place-holder-boda-vintage.jpg',
                'price': 1199,
                'category': 'wedding',
                'featured': False,
                'date': '2023-03-22',
                'description': 'Álbum con estilo vintage para bodas con un toque romántico y nostálgico. Perfecto para parejas que buscan un estilo clásico.',
                'details': {
                    'material': 'Tela y encaje',
                    'pages': 25,
                    'size': '28x28 cm',
                    'extras': ['Detalles en encaje', 'Cintas decorativas', 'Papel envejecido'],
                },
            },
            {
                'name': 'Álbum Quinceañera Clásico',
                'image': '/images/place-holder-quinceanera-clasico.jpg',
                'price': 899,
                'category': 'quinceanera',
                'featured': False,
                'date': '2023-02-18',
                'description': 'Álbum clásico para quinceañeras con un diseño elegante y atemporal. La opción perfecta para un recuerdo duradero.',
                'details': {
                    'material': 'Tela satinada',
                    'pages': 20,
                    'size': '25x25 cm',
                    'extras': ['Detalles en plata', 'Espacio para dedicatorias', 'Diseño personalizable'],
                },
            },
            {
                'name': 'Caja para Álbum Premium',
                'image': '/images/place-holder-boda-caja.jpg',
                'price': 499,
                'category': 'accessories',
                'featured': False,
                'date': '2023-01-30',
                'description': 'Caja protectora de lujo para álbumes, fabricada con materiales de alta calidad para preservar tus recuerdos por más tiempo.',
                'details': {
                    'material': 'Cartón rígido y tela',
                    'size': 'Adaptable a álbumes de 30x30 cm',
                    'extras': ['Interior acolchado', 'Cierre magnético', 'Personalizable'],
                },
            },
            {
                'name': 'Álbum Profesional Minimalista',
                'image': '/images/place-holder-profesional-minimalista.jpg',
                'price': 1299,
                'category': 'professional',
                'featured': True,
                'date': '2023-08-12',
                'description': 'Álbum con diseño minimalista para fotógrafos profesionales. Elegante, sobrio y con acabados de primera calidad.',
                'details': {
                    'material': 'Cuero sintético',
                    'pages': 30,
                    'size': '30x30 cm',
                    'extras': ['Acabado mate', 'Esquinas reforzadas', 'Papel fotográfico premium'],
                },
            },
        ]
        
        # Create products
        for product_data in products:
            # Check if product already exists
            slug = slugify(product_data['name'])
            if Product.objects.filter(slug=slug).exists():
                self.stdout.write(self.style.SUCCESS(f'Product already exists: {product_data["name"]}'))
                continue
                
            # Create product
            product = Product(
                name=product_data['name'],
                slug=slug,
                description=product_data['description'],
                price=product_data['price'],
                category=category_objects[product_data['category']],
                featured=product_data['featured'],
                show_on_homepage=product_data['featured'],  # Initially set same as featured
                show_on_landing=product_data['featured'],   # Initially set same as featured
                material=product_data['details']['material'],
                pages=product_data['details'].get('pages'),
                size=product_data['details']['size'],
            )
            
            # Save product to get ID
            product.save()
            
            # Add placeholder image
            # In a real scenario, you would download the image from a URL or use a local file
            # For this example, we'll just create a placeholder
            image_name = os.path.basename(product_data['image'])
            product.image.save(image_name, ContentFile(b'placeholder'), save=True)
            
            # Add extras
            for extra in product_data['details'].get('extras', []):
                ProductExtra.objects.create(product=product, feature=extra)
                
            self.stdout.write(self.style.SUCCESS(f'Created product: {product.name}'))
            
        self.stdout.write(self.style.SUCCESS('Initial data loaded successfully!'))

