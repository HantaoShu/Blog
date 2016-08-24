# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20160729_0238'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('maintain', models.TextField()),
                ('author', models.CharField(max_length=30)),
                ('timestamp', models.DateTimeField()),
                ('blogId', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.AlterModelOptions(
            name='blogspost',
            options={'ordering': ('-timestamp',)},
        ),
    ]
