from django.shortcuts import render

# Create your views here.
from articles.models import Article
from django.shortcuts import render

def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})