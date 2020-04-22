from django.shortcuts import render
from rest_framework import viewsets
from api.models import *
from api.serializers import *
# Create your views here.


class VueloViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vuelo.objects.using('data').all()
    serializer_class = VueloSerializer

class InformacionViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = InformacionSerializer
    queryset = Accidente.objects.using('data').all()

    def get_queryset(self):
        qs = super().get_queryset()
        filter_value = self.request.query_params.get('k_num', None)
        if filter_value is not None:
            return qs.filter(k_numaccidente=filter_value)
        return qs
        
