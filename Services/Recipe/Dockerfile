#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["RecipeLayers/Recipe.WebAPI/Recipe.WebAPI.csproj", "Recipe.WebAPI/"]
COPY ["RecipeLayers/Recipe.Business/Recipe.Business.csproj", "Recipe.Business/"]
COPY ["RecipeLayers/Core/Core.csproj", "Core/"]
COPY ["RecipeLayers/Recipe.Entities/Recipe.Entities.csproj", "Recipe.Entities/"]
COPY ["RecipeLayers/Recipe.DAL/Recipe.DAL.csproj", "Recipe.DAL/"]
RUN dotnet restore "Recipe.WebAPI/Recipe.WebAPI.csproj"
COPY . .
WORKDIR "/src/RecipeLayers/Recipe.WebAPI"
RUN dotnet build "Recipe.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Recipe.WebAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Recipe.WebAPI.dll"]
