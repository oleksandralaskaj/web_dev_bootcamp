<?php

class Session
{
    public static $instance = null;
    public $data = null;

    public static function instance()
    {
        if (static::$instance === null) {
            static::$instance = new static;
        }
        return static::$instance;
    }

    protected function __construct()
    {
        session_start();
        $this->data = $_SESSION;
    }

    public function put($key, $value)
    {
        $this->data[$key] = $value;
        $_SESSION[$key] = $value;
    }

    public function get($key, $default ="")
    {
        return $this->data[$key] ?? $default;
    }

}

//Session::instatnce