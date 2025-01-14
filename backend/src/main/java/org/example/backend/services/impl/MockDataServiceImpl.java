package org.example.backend.services.impl;

import org.example.backend.model.enums.Specialization;
import org.example.backend.services.MockDataService;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;
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

    // ------------------ STUDENTS ------------------

    private static final String[] FIRST_NAMES = {
            "Alex", "Maria", "John", "Sophia", "Michael",
            "Emma", "David", "Olivia", "Daniel", "Liam"
    };

    private static final String[] LAST_NAMES = {
            "Smith", "Johnson", "Brown", "Taylor", "Anderson",
            "Thomas", "Jackson", "White", "Harris", "Martin"
    };

    public String randomFirstName() {
        Random random = new Random();
        return FIRST_NAMES[random.nextInt(FIRST_NAMES.length)];
    }

    public String randomLastName() {
        Random random = new Random();
        return LAST_NAMES[random.nextInt(LAST_NAMES.length)];
    }

    public Specialization randomSpecialization() {
        Specialization[] specializations = Specialization.values();
        Random random = new Random();
        return specializations[random.nextInt(specializations.length)];
    }


    // ------------------ INTERNSHIPS ------------------

    private static final String[] INTERNSHIP_NAMES = {
            "Software Development Intern", "Data Analyst Intern", "Marketing Intern",
            "Product Manager Intern", "Graphic Design Intern", "AI Research Intern",
            "Cybersecurity Intern", "Web Developer Intern", "Cloud Computing Intern", "HR Intern"
    };

    public String randomInternshipName() {
        Random random = new Random();
        return INTERNSHIP_NAMES[random.nextInt(INTERNSHIP_NAMES.length)];
    }
    private static final String[] LENGTHS = {
            "3", "24", "12", "8", "6", "4"
    };

    public String randomLength() {
        Random random = new Random();
        return LENGTHS[random.nextInt(LENGTHS.length)];
    }
    private static final String[] WORK_TYPES = {
            "Remote", "On-Site", "Hybrid"
    };

    public String randomWorkType() {
        Random random = new Random();
        return WORK_TYPES[random.nextInt(WORK_TYPES.length)];
    }

    public Date randomDeadline() {
        Calendar calendar = Calendar.getInstance();
        Random random = new Random();
        int daysToAdd = random.nextInt(90) + 1; // Random number of days within 3 months
        calendar.add(Calendar.DAY_OF_YEAR, daysToAdd);

        // Convert java.util.Date to java.sql.Date
        return new Date(calendar.getTimeInMillis());
    }

    private static final String[] LOCATIONS = {
            "New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA",
            "Boston, MA", "Chicago, IL", "Remote", "Denver, CO", "Miami, FL", "Atlanta, GA"
    };

    public String randomLocation() {
        Random random = new Random();
        return LOCATIONS[random.nextInt(LOCATIONS.length)];
    }

    private static final String[] DETAILED_DESCRIPTIONS = {
            "Join our dynamic and innovative team as a Software Development Intern. You will be directly involved in designing, developing, and testing software solutions that address real-world challenges. Collaborate with experienced developers to learn about coding best practices, debugging techniques, and software lifecycle management. You’ll work on exciting technologies such as cloud computing, machine learning, or microservices architecture, depending on the project's focus. This internship offers hands-on experience with modern tools and frameworks, helping you build a strong foundation in software engineering. By the end of the program, you’ll have contributed to meaningful projects and gained valuable industry insights, preparing you for a successful career in technology.",
            "As a Data Analyst Intern, you will have the opportunity to work with large datasets to uncover trends and actionable insights. Your responsibilities will include cleaning and organizing data, creating dashboards, and preparing reports for key stakeholders. Learn advanced analytical techniques, such as predictive modeling and statistical analysis, while using tools like Python, R, or SQL. You’ll collaborate closely with the analytics and strategy teams to solve complex problems and present data-driven recommendations. This role provides a unique chance to enhance your critical thinking and technical skills in a professional setting. By the end of the internship, you will have built a portfolio of impactful projects showcasing your ability to derive insights from data.",
            "Participate in our Marketing Internship Program and gain hands-on experience in crafting effective marketing campaigns. You will assist in creating social media content, developing email marketing strategies, and analyzing the performance of ongoing campaigns. This role will expose you to various aspects of digital marketing, including search engine optimization, paid advertising, and brand storytelling. You’ll work alongside a creative and collaborative team, contributing to campaigns that directly impact the company’s visibility and growth. This internship is perfect for individuals passionate about connecting with audiences and understanding market trends. By the end of the program, you’ll have developed a strong foundation in marketing and gained practical skills to advance your career.",
            "Our Product Management Internship offers an exciting opportunity to gain insight into the world of technology innovation. Work closely with engineering, design, and marketing teams to define product requirements and roadmaps. You’ll contribute to creating user stories, prioritizing features, and ensuring successful product delivery. This role will help you understand the nuances of customer needs and how to translate them into technical solutions. You will also participate in stakeholder meetings, learning how to balance competing priorities in a dynamic environment. By the end of the internship, you will have gained a holistic view of product lifecycle management and the skills to excel in product strategy roles.",
            "Join our Graphic Design Internship to bring creative ideas to life through visual storytelling. You’ll be involved in designing assets for digital campaigns, social media, and print materials, ensuring consistency with the company’s brand identity. Gain hands-on experience with tools like Adobe Photoshop, Illustrator, and Figma, while exploring modern design trends. Collaborate with marketing and product teams to deliver designs that resonate with target audiences and drive engagement. This internship provides a platform to showcase your creativity and refine your technical skills under the guidance of experienced designers. By the end of the program, you’ll have built a diverse portfolio of work that demonstrates your ability to create impactful visuals.",
            "As an AI Research Intern, you will work on cutting-edge projects involving machine learning algorithms and artificial intelligence applications. Your responsibilities will include building and training models, analyzing data sets, and exploring innovative ways to solve complex problems. Collaborate with researchers and data scientists to develop AI solutions that have real-world impact, such as natural language processing, computer vision, or recommendation systems. You’ll gain experience with frameworks like TensorFlow, PyTorch, or scikit-learn, while also learning about ethical considerations in AI development. This role offers the opportunity to be part of a team driving advancements in a rapidly evolving field. By the end of the internship, you’ll have gained practical experience in AI and contributed to impactful projects.",
            "Be part of our Cybersecurity Internship and learn how to protect systems from cyber threats in today’s digital age. You’ll assist in performing vulnerability assessments, monitoring network activity, and responding to potential security incidents. Gain hands-on experience with tools like Wireshark, Nessus, or Splunk, while learning about encryption, firewall management, and threat detection techniques. Collaborate with security experts to develop strategies for mitigating risks and ensuring compliance with industry standards. This internship provides a valuable opportunity to understand the critical role cybersecurity plays in protecting sensitive information. By the end of the program, you’ll have gained practical skills in securing systems and addressing modern cybersecurity challenges.",
            "Contribute to our Web Development Internship by creating responsive and user-friendly websites that meet industry standards. You’ll work on front-end development using HTML, CSS, and JavaScript, as well as explore back-end technologies like Node.js or Django. Collaborate with designers and developers to ensure seamless user experiences and optimize website performance. Gain hands-on experience with version control systems like Git and learn about deployment processes using cloud platforms. This role is ideal for individuals passionate about web technologies and looking to build a strong foundation in development. By the end of the internship, you’ll have a portfolio of live projects that demonstrate your technical abilities.",
            "Explore the world of cloud computing in our Cloud Computing Internship. Learn how to design and deploy scalable cloud architectures using platforms like AWS, Azure, or Google Cloud. You’ll assist in setting up virtual machines, managing storage solutions, and implementing security best practices. Work closely with cloud engineers to optimize resource usage and troubleshoot system issues. This role offers a hands-on experience in leveraging cloud-native technologies to build efficient and cost-effective systems. By the end of the internship, you’ll have gained valuable skills in cloud infrastructure management and a deeper understanding of modern computing paradigms.",
            "Our Human Resources Internship provides a unique opportunity to develop skills in talent acquisition, employee engagement, and organizational development. Assist in crafting job descriptions, screening resumes, and coordinating interviews for various roles. You’ll also help organize training programs and team-building events to foster a positive workplace culture. Gain insight into HR policies, compliance, and best practices while working closely with experienced HR professionals. This internship is perfect for individuals interested in understanding the people side of business operations. By the end of the program, you’ll have developed strong interpersonal and organizational skills, preparing you for a career in human resources."
    };

    public String randomDescription() {
        Random random = new Random();
        return DETAILED_DESCRIPTIONS[random.nextInt(DETAILED_DESCRIPTIONS.length)];
    }


    private static final String[] DETAILED_STEPS_TO_APPLY = {
            "Submit your updated resume and a tailored cover letter through our online application portal. Highlight your relevant experience and skills.",
            "Complete a short online application form, including your personal details, educational background, and work experience.",
            "Participate in an initial online assessment designed to evaluate your technical skills and problem-solving abilities. Instructions will be sent via email after application submission.",
            "Schedule and attend a virtual interview with a member of our hiring team. Be prepared to discuss your past projects, career goals, and interest in the role.",
            "Provide contact information for two professional references who can vouch for your skills and experience. We will contact them for a brief evaluation.",
            "Complete a hands-on coding challenge or project submission relevant to the internship. You will have one week to complete and submit your work.",
            "Participate in a panel interview with team members and potential mentors. This will include technical questions as well as behavioral and situational scenarios.",
            "Attend an optional informational webinar to learn more about our internship program, work culture, and expectations.",
            "Submit proof of enrollment in an educational institution or recent graduation (if applicable) to meet our internship eligibility requirements.",
            "Receive an offer letter and complete the onboarding process, which includes signing a confidentiality agreement and setting up your work environment."
    };

    public String randomStepsToApply() {
        Random random = new Random();
        return DETAILED_STEPS_TO_APPLY[random.nextInt(DETAILED_STEPS_TO_APPLY.length)];
    }


    private static final String[] DETAILED_REQUIRED_KNOWLEDGE = {
            "Proficiency in programming languages such as Java, Python, or C++ is essential. Candidates should have hands-on experience in writing efficient, maintainable code and be familiar with debugging techniques. Understanding software lifecycle processes, such as development, testing, and deployment, will give you an added advantage.",
            "A strong grasp of front-end technologies, including HTML, CSS, and JavaScript, is required. Experience with modern frameworks such as React, Angular, or Vue.js will be beneficial. Knowledge of responsive design principles and cross-browser compatibility issues is a plus.",
            "Solid understanding of data structures and algorithms is a must-have. Candidates should be able to analyze computational problems and implement optimal solutions efficiently. Experience in applying these concepts in real-world scenarios or competitive programming will be highly valued.",
            "Experience with cloud platforms such as AWS, Azure, or Google Cloud is highly desirable. You should understand concepts like virtual machines, storage solutions, and serverless architectures. Familiarity with deploying and managing scalable applications in the cloud is a significant advantage.",
            "A working knowledge of version control systems such as Git is crucial. You should be comfortable with using Git for collaboration, managing branches, and resolving conflicts in a team environment. Experience with platforms like GitHub or GitLab is a bonus.",
            "Basic understanding of machine learning concepts and familiarity with tools like TensorFlow, PyTorch, or scikit-learn is preferred. Candidates should have experience in building and training models or a keen interest in exploring AI-driven solutions. Exposure to real-world machine learning projects will set you apart.",
            "Strong familiarity with database systems, both relational (e.g., MySQL, PostgreSQL) and non-relational (e.g., MongoDB, Cassandra), is required. You should understand how to design schemas, write efficient queries, and optimize database performance. Experience with data migration and backup strategies is an added advantage.",
            "Hands-on experience with data visualization tools such as Tableau, Power BI, or D3.js is a plus. You should be able to create compelling dashboards and reports to present complex data effectively. An eye for detail and a knack for storytelling with data are highly valued.",
            "A solid foundation in cybersecurity principles, including encryption, network security, and vulnerability management, is essential. Experience with security tools and techniques, such as penetration testing or risk assessment, will give you an edge. Awareness of regulatory compliance and industry standards is advantageous.",
            "Familiarity with Agile development methodologies and project management tools like Jira or Trello is preferred. You should understand how to work within iterative development cycles, participate in sprint planning, and track project progress effectively. Collaboration and adaptability are key traits for this role."
    };

    public String randomRequiredKnowledge() {
        Random random = new Random();
        return DETAILED_REQUIRED_KNOWLEDGE[random.nextInt(DETAILED_REQUIRED_KNOWLEDGE.length)];
    }


    private static final String[] SALARIES = {
            "15", "20", "25", "5", "0"
    };

    public String randomSalary() {
        Random random = new Random();
        return SALARIES[random.nextInt(SALARIES.length)];
    }

    // --------------------- APPLICATIONS ---------------------

    public Long randomStudentId() {
        Random random = new Random();
        return random.nextLong();
    }

    public Long randomInternshipId() {
        Random random = new Random();
        return random.nextLong();
    }

}
