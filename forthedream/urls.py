"""forthedream URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import *
from django.contrib import admin
from blog import views as blog_view
# blog
urlpatterns =[
    url(r'^spec/(?P<bid>\d+)/$',blog_view.spec),
    url(r'^$',blog_view.index),
    url(r'^tem/$',blog_view.tem),
    url(r'^comment/$',blog_view.comment),
    url(r'^yx$',blog_view.yx),
]
# admin
urlpatterns+=[
    url(r'^admin/', admin.site.urls),
]
urlpatterns+=[
    url(r'^.*/$',blog_view.error),
]
