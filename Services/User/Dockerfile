#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["UserLayers/User.WebAPI/User.WebAPI.csproj", "User.WebAPI/"]
COPY ["UserLayers/User.DAL/User.DAL.csproj", "User.DAL/"]
COPY ["UserLayers/User.Entities/User.Entities.csproj", "User.Entities/"]
COPY ["../Core/Core.csproj", "../Core/"]
COPY ["UserLayers/User.Business/User.Business.csproj", "User.Business/"]
RUN dotnet restore "User.WebAPI/User.WebAPI.csproj"
COPY . .
WORKDIR "/src/UserLayers/User.WebAPI"
RUN dotnet build "User.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "User.WebAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "User.WebAPI.dll"]
