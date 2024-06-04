<?php

class Session
{
    public static $instance = null;
    public $data = null;
    public $old_request =null;

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
        $this->data = array_merge($this->data, $_SESSION['flash_data']??[]);
        unset($_SESSION['flash_data']);

        $this->old_request = $_SESSION['flashed_request'] ?? [];
        unset($_SESSION['flashed_request']);
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

    public function flash($key, $value)
    {
        $_SESSION['flash_data'][$key] = $value;
    }

    public function flashRequest()
    {
        $_SESSION['flashed_request'] = $_POST;
    }

    public function old($key, $default = null)
    {
        return $this->old_request[$key] ?? $default;
    }
}

//Session::instatnce