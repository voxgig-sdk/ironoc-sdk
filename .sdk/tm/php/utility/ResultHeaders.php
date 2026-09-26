<?php
declare(strict_types=1);

// Ironoc SDK utility: result_headers

class IronocResultHeaders
{
    public static function call(IronocContext $ctx): ?IronocResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
