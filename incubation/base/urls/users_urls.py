from django.urls import path
from base.views import users_views as views

urlpatterns = [
    
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', views.getUserProfile, name='users_profile'),
    path('control/<str:id>/', views.controlUsers, name='users_control'),
    path('', views.getUsers, name='users'),
    path('register/', views.registerUser, name='register'),
    path('register_company/', views.registerCompany, name='register_company'),
    path('myregs/', views.getMyReg, name='myregs'),
    
]