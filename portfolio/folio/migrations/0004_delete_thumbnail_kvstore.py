# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-20 13:58
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('folio', '0003_auto_20171120_1355'),
    ]

    operations = [
        migrations.DeleteModel(
            name='thumbnail_kvstore',
        ),
    ]