package org.example.backend.services.impl;

import org.example.backend.services.MockDataService;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MockDataServiceImpl implements MockDataService {
    // List of possible company names
    private static final String[] COMPANY_NAMES = {
            "Tech Solutions Inc.",
            "Innovative Systems Ltd.",
            "Global Enterprises",
            "Dynamic Solutions",
            "Pinnacle Technologies",
            "BlueSky Software",
            "NextGen Industries",
            "Fusion Labs",
            "Quantum Innovations",
            "Skyline Networks"
    };

    public String randomCompanyName() {
        // Create a Random object
        Random random = new Random();

        // Randomly select an index from the list
        int index = random.nextInt(COMPANY_NAMES.length);

        // Return the company name at the random index
        return COMPANY_NAMES[index];
    }

    private static final String[] EMAILS = {
            "john.doe@example.com",
            "jane.smith@techsolutions.com",
            "michael.jones@innovative.com",
            "emily.brown@dynamic.com",
            "david.white@bluesky.com",
            "susan.miller@nextgen.com",
            "robert.clark@quantum.com",
            "lisa.walker@fusionlabs.com",
            "tom.harris@pinnacletech.com",
            "nancy.moore@skyline.com"
    };

    public String randomEmail() {
        // Create a Random object
        Random random = new Random();

        // Randomly select an index from the list
        int index = random.nextInt(EMAILS.length);

        // Return the email at the random index
        return EMAILS[index];
    }

    private static final String[] COMPANY_TYPES = {
            "Software Development Company",
            "E-Commerce Business",
            "Digital Marketing Agency",
            "Consulting Firm",
            "Financial Services Provider",
            "Cloud Solutions Provider",
            "Cybersecurity Firm",
            "AI & Machine Learning Company",
            "Healthcare Technology Provider",
            "Logistics and Supply Chain Solutions"
    };

    public String randomCompanyType() {
        Random random = new Random();
        int index = random.nextInt(COMPANY_TYPES.length);
        return COMPANY_TYPES[index];
    }

    private static final String[] PHONE_NUMBERS = {
            "+1 555-234-5678",
            "+1 555-345-6789",
            "+1 555-456-7890",
            "+1 555-567-8901",
            "+1 555-678-9012",
            "+1 555-789-0123",
            "+1 555-890-1234",
            "+1 555-901-2345",
            "+1 555-012-3456",
            "+1 555-123-4567"
    };

    public String randomPhoneNumber() {
        Random random = new Random();
        int index = random.nextInt(PHONE_NUMBERS.length);
        return PHONE_NUMBERS[index];
    }

    private static final String[] ADDRESSES = {
            "123 Innovation Drive, Silicon Valley, CA, 94025",
            "456 Tech Lane, San Francisco, CA, 94110",
            "789 Digital Blvd, Mountain View, CA, 94040",
            "101 Software St., Palo Alto, CA, 94301",
            "202 Cloud Crescent, San Jose, CA, 95112",
            "303 Future Way, Menlo Park, CA, 94025",
            "404 Dev Circle, Cupertino, CA, 95014",
            "505 Startup Ave, Santa Clara, CA, 95050",
            "606 Enterprise Rd, Sunnyvale, CA, 94085",
            "707 Digital Park, Redwood City, CA, 94063"
    };

    public String randomAddress() {
        Random random = new Random();
        int index = random.nextInt(ADDRESSES.length);
        return ADDRESSES[index];
    }

    private static final String[] WEBSITES = {
            "https://www.techsolutions.com",
            "https://www.innovativesystems.com",
            "https://www.globalecommerce.com",
            "https://www.dynamicsolutions.com",
            "https://www.blueskysoftware.com",
            "https://www.nextgenindustries.com",
            "https://www.quantuminnovations.com",
            "https://www.fusionlabs.com",
            "https://www.pinnacletech.com",
            "https://www.skylinenetworks.com"
    };

    public String randomWebsite() {
        Random random = new Random();
        int index = random.nextInt(WEBSITES.length);
        return WEBSITES[index];
    }

    private static final String[] SHORT_DESCRIPTIONS = {
            "Innovative software solutions for modern businesses.",
            "Building the future with cutting-edge technologies.",
            "Pioneering the next generation of tech solutions.",
            "Empowering businesses with digital transformation.",
            "Delivering seamless and scalable enterprise solutions.",
            "Revolutionizing industries through software innovation.",
            "Creating intuitive and secure digital experiences.",
            "Streamlining processes with customized technology solutions.",
            "Helping businesses unlock their full potential with tech.",
            "Transforming organizations through technological advancement."
    };

    public String randomShortDescription() {
        Random random = new Random();
        int index = random.nextInt(SHORT_DESCRIPTIONS.length);
        return SHORT_DESCRIPTIONS[index];
    }

    private static final String[] LONG_DESCRIPTIONS = {
            "Tech Solutions Inc. is a cutting-edge technology company committed to helping businesses thrive in the digital age. We deliver customized software development services tailored to meet the unique needs of our clients. Our expertise includes developing high-performance web applications, intuitive mobile apps, and seamless cloud integrations. With a focus on user-centric design, security, and scalability, we aim to drive innovation and efficiency for organizations across various industries. Over the past decade, we have collaborated with startups, SMBs, and Fortune 500 companies, ensuring exceptional service delivery through agile methodologies and a highly skilled team of professionals.",
            "At Innovative Systems, we specialize in building custom software solutions that help businesses streamline operations, reduce costs, and scale efficiently. With a team of experienced developers, we offer end-to-end services in web development, mobile application design, and cloud-based solutions. Our work is guided by a commitment to quality, customer satisfaction, and innovation. We pride ourselves on our ability to understand the specific needs of our clients and provide tailored solutions that drive measurable results.",
            "Quantum Innovations is at the forefront of artificial intelligence and machine learning technologies. We provide innovative AI-driven solutions to help businesses automate processes, improve decision-making, and deliver personalized experiences. From predictive analytics to intelligent automation, we empower organizations to harness the full potential of AI. Our team is passionate about pushing the boundaries of technology and working with clients to solve complex problems in innovative ways.",
            "Dynamic Solutions offers a broad range of digital marketing services to help businesses grow their online presence and reach new audiences. With expertise in SEO, PPC advertising, social media marketing, and content creation, we develop strategies that are customized to each client's goals. Our team works collaboratively with clients to drive measurable outcomes through data-driven decision-making and cutting-edge marketing techniques.",
            "Fusion Labs is a research and development firm that partners with organizations to build next-generation technologies. Our focus is on creating innovative solutions that address the evolving needs of businesses and consumers. From advanced software platforms to state-of-the-art hardware, we specialize in bridging the gap between emerging technologies and real-world applications. We believe in the power of innovation to drive change and are dedicated to making a positive impact on the world."
    };

    public String randomLongDescription() {
        Random random = new Random();
        int index = random.nextInt(LONG_DESCRIPTIONS.length);
        return LONG_DESCRIPTIONS[index];
    }

    private static final String[] WORKPLACES = {
            "Hybrid (Remote and On-Site)",
            "Fully Remote",
            "On-Site Only",
            "Flexible (With Remote Options)",
            "Work From Home Option Available",
            "Remote with Occasional Travel",
            "On-Site with Flexible Hours",
            "Hybrid (3 Days On-Site, 2 Remote)",
            "Fully On-Site",
            "Remote Team with Global Collaboration"
    };

    public String randomWorkplace() {
        Random random = new Random();
        int index = random.nextInt(WORKPLACES.length);
        return WORKPLACES[index];
    }

    private static final String[] PREVIOUS_INTERNSHIPS = {
            "Tech Solutions Inc. has a strong track record of mentoring aspiring professionals. Over the last five years, we have hosted over 50 interns across diverse roles, including software engineering, data science, quality assurance, UI/UX design, digital marketing, and product management. Many of our former interns have transitioned to full-time roles within the company, while others have gone on to work with industry-leading organizations. Our internship program provides hands-on project experience, personalized mentorship, and opportunities to contribute to real-world applications, ensuring every participant gains valuable industry insights and practical skills.",
            "Innovative Systems has successfully hosted a variety of interns across different departments, including software development, digital marketing, and project management. Over the years, many of our interns have grown into full-time employees, and we take pride in fostering a supportive and collaborative environment where interns can learn and develop their skills. Our internship program is designed to provide valuable real-world experience and an opportunity to work alongside professionals who are passionate about technology and innovation.",
            "Global Enterprises offers a robust internship program for students pursuing careers in technology and business. We provide hands-on experience in fields such as software engineering, business analytics, and product management. Interns are paired with mentors and have the opportunity to work on meaningful projects that contribute to the company's goals. Our internships are highly competitive and provide the chance to develop skills that will serve interns well in their future careers.",
            "Pinnacle Technologies has a rich history of supporting interns and offering them meaningful experiences that lead to professional growth. Our internship program includes structured training, exposure to cutting-edge technology, and opportunities to work on projects that shape the future of the tech industry. Interns are encouraged to take ownership of their work and receive feedback from experienced mentors to help them grow both personally and professionally.",
            "Fusion Labs offers an internship program that combines research, development, and real-world application. Interns gain exposure to a variety of projects, from software development to hardware engineering. We provide a collaborative environment where interns can contribute to the development of next-generation technologies. Over the years, many of our interns have gone on to secure full-time positions within the company or other industry-leading organizations."
    };

    public String randomPreviousInternships() {
        Random random = new Random();
        int index = random.nextInt(PREVIOUS_INTERNSHIPS.length);
        return PREVIOUS_INTERNSHIPS[index];
    }



}
