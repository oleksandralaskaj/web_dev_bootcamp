<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Books</title>
    @vite('resources/css/test.css')
</head>
<body>

@include('components.navigation', [
    'current_page' => $current_page
])
@yield('content')

</body>
</html>
