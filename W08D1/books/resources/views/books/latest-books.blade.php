@extends('layouts.main', [
    'current_page' => 'latest'
])
@section('content')
<ol id="latest-books">
@vite('resources/js/latest-books.js')
</ol>
@endsection
