package com.springboot.dto;

public record ApiResponse<T>(boolean success, T data, String message) {
    public static <T> ApiResponse<T> success(T data){
        return new ApiResponse<T>(true, data, null);

    }
    public static <T> ApiResponse<T> error(String message){
        return new ApiResponse<T>(false, null, message);
    }
}
