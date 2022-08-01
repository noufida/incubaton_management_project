from django.shortcuts import render
from base.models import Register,Slots

from base.serializers import  RegisterSerializer,RegisterUpdateSerializer,SlotSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import  IsAdminUser
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getCompanies(request):
    companies = Register.objects.all()
    serializer = RegisterSerializer(companies, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def registerUpdate(request,pk):
    register=Register.objects.get(id=pk)
    register.status='pending'
    serializer=RegisterUpdateSerializer(instance=register,data=request.data) 
      
    
    if serializer.is_valid():               
        serializer.save()
        
    
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def registerDelete(request,pk):
    register=Register.objects.get(id=pk)
    register.delete()
    
    return Response("deleted")

@api_view(['POST'])
@permission_classes([IsAdminUser])
def registerApprove(request,pk):
    register=Register.objects.get(id=pk)
    register.status='approved'
    serializer=RegisterUpdateSerializer(instance=register,data=request.data) 
      
    
    if serializer.is_valid():               
        serializer.save()
        
    
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getRegister(request,id):
    register=Register.objects.get(id=id)
    serializer = RegisterSerializer(register, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def getSlot(request,pk):
    id=request.data['reg_id']
    register=Register.objects.get(id=id)
    slot=Slots.objects.get(id=pk)
    slot.booked=True
    slot.save()
    register.slot=slot
    register.save()
    serializer=RegisterSerializer(register,many=False) 
            
    
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def slots(request):
    slots = Slots.objects.all()
    serializer = SlotSerializer(slots, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
@permission_classes([IsAdminUser])
def approvedSlot(request):
    register = Register.objects.filter(status="approved")
    serializer = RegisterSerializer(register, many=True)
    return Response(serializer.data)
