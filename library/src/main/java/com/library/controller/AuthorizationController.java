package com.library.controller;

import com.library.pojo.User;
import com.library.service.UserService;
import com.library.utils.Result;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("auth")
public class AuthorizationController {

    @Autowired
    private UserService userService;


    @PreAuthorize("hasAuthority('ROOT')")
    @PostMapping("register")
    public Result register(@RequestBody User user){
        Result result = userService.register(user);
        return result;
    }

    @PostMapping("login")
    public Result login(@RequestBody User user){
        System.out.println("result = " + user);
        Result result = userService.login(user);
        return result;
    }

    @GetMapping("login")
    public Result AutoLogin(HttpServletRequest request){
        Result result = userService.AutoLogin(request);
        System.out.println("result = " + result);
        return result;
    }


}
