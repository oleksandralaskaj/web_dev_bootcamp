<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.scss')
    @vite('resources/js/app.js')
    <title>mi6</title>
</head>
<body>
<div id="people-of-interest">
    @viteReactRefresh
    @vite('resources/js/people-of-interest.jsx')
</div>
</body>
</html>
