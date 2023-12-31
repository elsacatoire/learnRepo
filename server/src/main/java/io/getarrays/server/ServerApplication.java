package io.getarrays.server;

import io.getarrays.server.enumeration.Status;
import io.getarrays.server.model.Server;
import io.getarrays.server.repo.ServerRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static io.getarrays.server.enumeration.Status.SERVER_UP;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	CommandLineRunner run(ServerRepo serverRepo) {
		return  args -> {
			serverRepo.save(new Server(null, "192.168.1.160","Ubuntu Linux", "16 GB",
					"Personal PC", "http://localhost:8080/server/image/server01.png", SERVER_UP));
			serverRepo.save(new Server(null, "192.168.1.58","Fedora Linux", "16 GB",
					"Dell Tower", "http://localhost:8080/server/image/server02.png", SERVER_UP));
			serverRepo.save(new Server(null, "192.168.1.21","UMS 2008", "32 GB",
					"Web Server", "http://localhost:8080/server/image/server03.png", SERVER_UP));
			serverRepo.save(new Server(null, "192.168.1.14","Red Hat Ent Linux", "64 GB",
					"Mail Server", "http://localhost:8080/server/image/server04.png", SERVER_UP));
		};
	}

}
