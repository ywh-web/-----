from django.urls import path
from .views import contact_inquiry_create, health_check


urlpatterns = [
    path('health/', health_check, name='health-check'),
    path('contact-inquiries/', contact_inquiry_create, name='contact-inquiry-create'),
]
