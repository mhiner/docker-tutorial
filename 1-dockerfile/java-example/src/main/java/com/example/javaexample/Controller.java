package com.example.javaexample;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/*")
public class Controller {

  @RequestMapping(method = RequestMethod.GET)
  public String hello(){
    return "Hello world!";
  }
}
