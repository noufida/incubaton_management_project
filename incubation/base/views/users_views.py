from django.shortcuts import render
from django.contrib.auth.models import User
from base.models import Register

from base.serializers import UserSerializer, UserSerializerWithToken, RegisterSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
        data = super().validate(attrs)
        
        serializer = UserSerializerWithToken(self.user).data
        
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
        )
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
#@permission_classes([IsAdminUser])
def controlUsers(request,id):
    user = User.objects.get(id=id)
    if user.is_active:
        user.is_active = False
    else:
        user.is_active = True
    user.save()
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def registerCompany(request):
    data = request.data
    try:
       
        company = Register.objects.create(
            user=request.user,
            name = data['name'],
            address = data['address'],
            city = data['city'],
            state = data['state'],
            email = data['email'],
            phone_number = data['phone_number'],
            company_name = data['company_name'],
            team_description = data['team_description'],
            product_description = data['product_description'],
            problem_description = data['problem_description'],
                 
        )
        
        
        serializer = RegisterSerializer(company, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'Some Problem occured'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
   

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyReg(request):
    user = request.user
    company = Register.objects.filter(user=user)
   
    serializer = RegisterSerializer(company,many=True)
    return Response(serializer.data)

