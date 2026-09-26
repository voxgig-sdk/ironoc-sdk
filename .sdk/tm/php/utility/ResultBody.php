<?php
declare(strict_types=1);

// Ironoc SDK utility: result_body

class IronocResultBody
{
    public static function call(IronocContext $ctx): ?IronocResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
