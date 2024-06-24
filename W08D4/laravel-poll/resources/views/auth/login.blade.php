@extends('layouts.main', [
    'current_page' => 'login'
])
@section('content')
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<h1>Login page</h1>
<form action="{{ route('login') }}" method="post">

    @csrf
    Email:
    <input type="email" name="email" value="{{ old('email') }}"><br>
    Password:
    <input type="password" name="password" value=""><br>

    <button>Login</button>
</form>
@endsection
