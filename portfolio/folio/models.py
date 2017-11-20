# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Picture(models.Model):
	name = models.CharField(max_length=40)
	image = models.ImageField(upload_to="image/")

	def __str__(self):
		return self.name