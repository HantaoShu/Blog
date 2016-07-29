from django.db import models
from django.contrib import admin
# Create your models here.
class BlogsPost(models.Model):
    title = models.CharField(max_length = 150)
    abstract = models.TextField(default='')
    maintain = models.TextField()
    timestamp = models.DateTimeField()
    def __unicode__(self):
        return self.title

class User(models.Model):
    username = models.CharField(max_length = 30)


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title','abstract','timestamp')

admin.site.register(BlogsPost,BlogPostAdmin)
