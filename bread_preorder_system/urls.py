"""
URL configuration for bread_preorder_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

"""url patterns for Bread Preorder system"""
from django.contrib import admin
from django.urls import path, include
from bread import urls as bread_urls
from .views import root_route, logout_route


urlpatterns = [
    path('', root_route),
    path('admin/', admin.site.urls),
    path('auth/', include('rest_framework.urls')),
    # our logout route has to be above the default one to be matched first
    path('dj-rest-auth/logout/', logout_route),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('', include('bread.urls')),
    path('', include('sellingPoint.urls')),
    path('', include('contactUs.urls')),
    # path('', include('orderedBread.urls')),
    # path('', include('preorder.urls')),
    # path('', include('userProfile.urls')),
]