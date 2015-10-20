package com.zestlifia.home;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Controller
@SpringBootApplication
public class App  extends WebMvcConfigurerAdapter {
    public static void main( String[] args ) {
    	SpringApplication.run(App.class, args);
    }

    // static resources
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/zestlifia/**").addResourceLocations("/WEB-INF/zestlifia/");
    }
    
    @RequestMapping("/")
    public String enter() {
      return "redirect:/zestlifia/index.html";
    }
}
