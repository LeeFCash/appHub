package org.example.app;
// for now code
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class AppLogic {

	@PostMapping("/add")
	public Map<String, Integer> add(@RequestBody Map<String, Integer> input) {
		int result = input.get("a") + input.get("b");
		return Map.of("result", result);
	}

	@GetMapping("/")
	public String home() {
		return "Backend is running";
	}

	@GetMapping("/digital-portfolio/aboutMeTab")
	public AboutMeTabResponse DigitalPortfolioAboutMeTabResponse() {
		return new AboutMeTabResponse(
				"Lee Cash",
				"2004-07-26",
				"High school Diploma",
				"I've received this diploma as a result of graduating.",
				"The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.",
				"I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them."
				);
	}

	@GetMapping("/digital-portfolio/skills")
	public SkillsResponse DigitalPortfolioSkillsResponse() {
		return new SkillsResponse(
				"html( for basic website often used with css and javascript and in part JSX(used in react) )",
				"css( with flask or react or on it's own )",
				"javascript( can use on it's own or with react(by JSX) )",
				"java( used for Backend or full java apps )",
				"python( also with Flask )",
				"mySQL( Server-side dataBase )",
				"mySQLite( for Client-side dataBase )",
				"react( also with nodejs using mySQL/mySQL )",
				"nodejs( for mySQL/mySQLite and turning it into json for a local host server )",
				"https://docs.google.com/document/d/11U-PeRWKpVxDgFKCo7N4ncxbx-QHA7CDqgkC0bXaRfo/edit?usp=sharing",
				"https://github.com/LeeFCash",
				"https://www.youtube.com/@codeShowCase",
				"put in later 1",
				"put in later 2"
				);
	}

	@GetMapping("/digital-portfolio/contactMe")
	public ContactMeResponse DigitalPortfolioContactMeResponse() {
		return new ContactMeResponse(
				"Lee F. Cash",
				"leecash133@gmail.com",
				"+1 762 222-3156",
				"Highly motivated and creative college student dedicated to obtaining a degree in Web Design. Proficient in HTML, CSS, and JavaScript, with a commitment to staying abreast of industry trends and emerging technologies. Currently developing skills in Node.js and React JS. Seeking an opportunity to collaborate with cross-functional teams, eager to apply skills and contribute to innovative web design projects. Excited to bring technical skills and design sensibilities to a challenging and rewarding role in web design."
				);
	}

}
