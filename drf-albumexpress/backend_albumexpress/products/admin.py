from django.contrib import admin
from .models import Category, Product, ProductExtra

class ProductExtraInline(admin.TabularInline):
    model = ProductExtra
    extra = 3

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'featured', 'show_on_homepage', 'show_on_landing', 'date_added')
    list_filter = ('category', 'featured', 'show_on_homepage', 'show_on_landing')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ('date_added', 'date_updated')
    fieldsets = (
        (None, {
            'fields': ('name', 'slug', 'description', 'price', 'image', 'category')
        }),
        ('Display Options', {
            'fields': ('featured', 'show_on_homepage', 'show_on_landing')
        }),
        ('Product Details', {
            'fields': ('material', 'pages', 'size')
        }),
        ('Timestamps', {
            'fields': ('date_added', 'date_updated'),
            'classes': ('collapse',)
        }),
    )
    inlines = [ProductExtraInline]
    list_per_page = 20

