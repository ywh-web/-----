from django.contrib import admin
from .models import ContactInquiry


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact', 'cooperation_type', 'status', 'created_at')
    list_filter = ('cooperation_type', 'status', 'created_at')
    search_fields = ('name', 'contact', 'message')
    readonly_fields = ('created_at', 'updated_at')
    list_editable = ('status',)
