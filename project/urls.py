from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_swagger.views import get_swagger_view

from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

swagger = get_swagger_view(title='Api of project')

from django.conf import settings
from django.conf.urls.static import static

from django.views.static import serve

from rest_framework_jwt.views import refresh_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
    path('swagger/', swagger),

    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    re_path(r'', TemplateView.as_view(template_name='index.html'), name='home'),
]

urlpatterns += staticfiles_urlpatterns()

#from django.views.static import serve
#url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}), 
#url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), 
