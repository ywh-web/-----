from django.urls import path
from .views import contact_inquiry_create


urlpatterns = [
    path('contact-inquiries/', contact_inquiry_create, name='contact-inquiry-create'),
]
