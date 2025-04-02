from django.db import models
from django.utils.text import slugify
import os

def product_image_path(instance, filename):
    """Generate file path for product images"""
    # Get the file extension
    ext = filename.split('.')[-1]
    # Create a new filename with the slug
    filename = f"{slugify(instance.name)}.{ext}"
    # Return the full path
    return os.path.join('products', filename)

class Category(models.Model):
    """Category model for products"""
    CATEGORY_CHOICES = [
        ('wedding', 'Bodas'),
        ('quinceanera', 'Quinceañeras'),
        ('family', 'Familias'),
        ('professional', 'Profesional'),
        ('accessories', 'Accesorios'),
    ]
    
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    code = models.CharField(max_length=20, choices=CATEGORY_CHOICES, unique=True)
    
    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Product(models.Model):
    """Product model"""
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=product_image_path)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    featured = models.BooleanField(default=False)
    show_on_homepage = models.BooleanField(default=False)
    show_on_landing = models.BooleanField(default=False)
    date_added = models.DateField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    
    # Product details
    material = models.CharField(max_length=100)
    pages = models.PositiveIntegerField(null=True, blank=True)
    size = models.CharField(max_length=50)
    
    class Meta:
        ordering = ['-date_added']
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    @property
    def details(self):
        """Return product details as a dictionary"""
        return {
            'material': self.material,
            'pages': self.pages,
            'size': self.size,
            'extras': [extra.feature for extra in self.extras.all()]
        }

class ProductExtra(models.Model):
    """Extra features for products"""
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='extras')
    feature = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.product.name} - {self.feature}"

