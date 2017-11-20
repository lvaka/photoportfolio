# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.utils import timezone
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.http import HttpResponse
from .models import Picture
from .forms import PictureForm

# Create your views here.

def main_page(request):
	if request.method == "POST":
		form = PictureForm(request.POST, request.FILES)
		if form.is_valid():
			form.save()
			HttpResponse('image upload success')
			form = PictureForm()
			return redirect('main_page')
		else:
			return HttpResponse('image upload failed')
	else:
		form = PictureForm()

	pics = Picture.objects.order_by('-pk')

	return render(request, 'folio/main.html', {'form': form, 'pics' : pics})