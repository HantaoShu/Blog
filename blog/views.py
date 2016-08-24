from blog.models import BlogsPost,Comment
from django.shortcuts import render_to_response
from .models import CommentForm,Comment
from django.http import HttpResponseRedirect,HttpResponse
import re
import markdown2
# Create your views here.
def index(request):
    blog_list = BlogsPost.objects.all()
    for item in blog_list:
        item.maintain = item.maintain[0:200]+'...'
    return render_to_response('index.html',{'blog_list':blog_list})
 
def spec(request,bid):
    blog_list = BlogsPost.objects.all()
    for item in blog_list:
        item.maintain = item.maintain[0:200]+'...'
    #path = request.get_full_path()
    # str(re.search(r'/\d+',path).group(0))[1:]
    spec_blog = BlogsPost.objects.get(id=bid)
    spec_blog.maintain = markdown2.markdown(spec_blog.maintain)
    comment = Comment.objects.filter(blogId=bid)
    cmlen = len(comment)
    return render_to_response('spec.html',{'spec':spec_blog,'blog_list':blog_list,'bid':bid,'comment':comment,'cmlen':cmlen})
    
def tem(request):
    return render_to_response('tem.html')

def comment(request):
    
    if(request.method == 'POST'):
        form = CommentForm(request.POST)
        if form.is_valid():
            form_blogId = form.cleaned_data['blogId']
            form_author = form.cleaned_data['author']
            form_maintain = form.cleaned_data['maintain']
            if(not form_maintain):
                HttpResponseRedirect('/spec/'+str(form_blogId)+'/') 
            Comment(blogId=form_blogId,author=form_author,maintain=form_maintain).save()
        return HttpResponseRedirect('/spec/'+str(form_blogId)+'/') 

