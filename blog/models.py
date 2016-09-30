from django.db import models
from django.contrib import admin
from django.forms import ModelForm
# Create your models here.
class BlogsPost(models.Model):
    title = models.CharField(max_length = 150)
    abstract = models.TextField(default='')
    maintain = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    def __unicode__(self):
        return self.title
    class Meta:
        ordering=('-timestamp',)


class Comment(models.Model):
    maintain = models.TextField()
    author = models.CharField(max_length = 30,default='Guest')
    timestamp = models.DateTimeField(auto_now_add=True)
    blogId = models.IntegerField()


class CommentForm(ModelForm):
    class Meta:
        model = Comment
        fields=('blogId','author','maintain')

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('id','title','abstract','timestamp')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id','author','timestamp','blogId','maintain')
admin.site.register(BlogsPost,BlogPostAdmin)
admin.site.register(Comment,CommentAdmin)
