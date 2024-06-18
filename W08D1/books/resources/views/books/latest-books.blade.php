@extends('layouts.main', [
    'current_page' => 'index'
])
@section('content')
<ol id="latest-books">
@vite('resources/js/latest-books.js')
</ol>
@endsection
