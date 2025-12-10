-- Sample Portfolio Data
-- Insert a demo user (you can modify this data in the Supabase dashboard)

INSERT INTO users (id, name, bio, photo_url, email, phone, location, resume_url)
VALUES (
  gen_random_uuid(),
  'John Developer',
  'Full Stack Developer & UI/UX Enthusiast',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  'john.dev@example.com',
  '+1 (555) 123-4567',
  'San Francisco, CA',
  'https://example.com/resume.pdf'
) ON CONFLICT DO NOTHING;

-- Get the user ID for foreign key references
DO $$
DECLARE
  user_uuid uuid;
BEGIN
  SELECT id INTO user_uuid FROM users LIMIT 1;

  -- Contact Info
  INSERT INTO contact_info (user_id, type, label, value, icon, order_index) VALUES
    (user_uuid, 'email', 'Email', 'john.dev@example.com', '📧', 1),
    (user_uuid, 'phone', 'Phone', '+1 (555) 123-4567', '📱', 2),
    (user_uuid, 'location', 'Location', 'San Francisco, CA', '📍', 3);

  -- Social Links
  INSERT INTO social_links (user_id, platform, url, icon, color, order_index) VALUES
    (user_uuid, 'GitHub', 'https://github.com/johndoe', '💻', '#333333', 1),
    (user_uuid, 'LinkedIn', 'https://linkedin.com/in/johndoe', '💼', '#0077B5', 2),
    (user_uuid, 'Twitter', 'https://twitter.com/johndoe', '🐦', '#1DA1F2', 3),
    (user_uuid, 'Portfolio', 'https://johndoe.dev', '🌐', '#3B82F6', 4);

  -- Skills
  INSERT INTO skills (user_id, name, category, level, icon, color, order_index) VALUES
    (user_uuid, 'React', 'Frontend', 95, '⚛️', '#61DAFB', 1),
    (user_uuid, 'TypeScript', 'Frontend', 90, '📘', '#3178C6', 2),
    (user_uuid, 'Tailwind CSS', 'Frontend', 85, '🎨', '#06B6D4', 3),
    (user_uuid, 'Node.js', 'Backend', 88, '🟢', '#339933', 4),
    (user_uuid, 'PostgreSQL', 'Backend', 82, '🐘', '#4169E1', 5),
    (user_uuid, 'MongoDB', 'Backend', 80, '🍃', '#47A248', 6),
    (user_uuid, 'Docker', 'DevOps', 75, '🐳', '#2496ED', 7),
    (user_uuid, 'AWS', 'DevOps', 70, '☁️', '#FF9900', 8),
    (user_uuid, 'Git', 'Tools', 92, '🔀', '#F05032', 9),
    (user_uuid, 'Figma', 'Design', 78, '🎯', '#F24E1E', 10);

  -- Projects
  INSERT INTO projects (user_id, title, description, long_description, image_url, demo_url, github_url, technologies, featured, order_index) VALUES
    (
      user_uuid,
      'E-Commerce Platform',
      'A modern, full-featured e-commerce platform with real-time inventory management',
      'Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration with Stripe, and an admin dashboard. Implemented real-time inventory updates using WebSockets and optimized performance with Redis caching.',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://demo.example.com',
      'https://github.com/johndoe/ecommerce',
      ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      true,
      1
    ),
    (
      user_uuid,
      'Task Management App',
      'A collaborative task management tool with real-time updates and team features',
      'Developed a Trello-like application with drag-and-drop functionality, real-time collaboration, team workspaces, and advanced filtering. Integrated WebSocket for live updates and implemented complex state management with Redux.',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://tasks.example.com',
      'https://github.com/johndoe/taskapp',
      ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      true,
      2
    ),
    (
      user_uuid,
      'Social Media Dashboard',
      'Analytics dashboard for social media management across multiple platforms',
      'Created a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features include customizable widgets, data visualization with Chart.js, scheduled reporting, and export functionality.',
      'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://dashboard.example.com',
      'https://github.com/johndoe/dashboard',
      ARRAY['React', 'Node.js', 'MongoDB', 'Chart.js', 'AWS'],
      true,
      3
    ),
    (
      user_uuid,
      'Weather App',
      'Beautiful weather forecast application with location-based updates',
      'Simple yet elegant weather application using OpenWeather API with location services, 7-day forecasts, and detailed weather information.',
      'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://weather.example.com',
      'https://github.com/johndoe/weather',
      ARRAY['React', 'API Integration', 'Geolocation'],
      false,
      4
    );

  -- Experiences
  INSERT INTO experiences (user_id, title, company, location, start_date, end_date, current_job, description, technologies, order_index) VALUES
    (
      user_uuid,
      'Senior Full Stack Developer',
      'Tech Innovations Inc.',
      'San Francisco, CA',
      '2021-06-01',
      NULL,
      true,
      'Leading development of enterprise-level web applications serving 100K+ users. Architecting scalable microservices and mentoring junior developers. Implemented CI/CD pipelines reducing deployment time by 60%.',
      ARRAY['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      1
    ),
    (
      user_uuid,
      'Full Stack Developer',
      'Digital Solutions Co.',
      'Remote',
      '2019-03-01',
      '2021-05-31',
      false,
      'Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create responsive, user-friendly interfaces. Improved application performance by 40% through optimization.',
      ARRAY['React', 'TypeScript', 'MongoDB', 'Express', 'Redux'],
      2
    ),
    (
      user_uuid,
      'Frontend Developer',
      'StartUp Labs',
      'New York, NY',
      '2017-08-01',
      '2019-02-28',
      false,
      'Built responsive web applications from design mockups. Implemented complex UI components and animations. Worked closely with backend team to integrate RESTful APIs.',
      ARRAY['JavaScript', 'React', 'CSS3', 'Git', 'REST APIs'],
      3
    );

  -- Education
  INSERT INTO education (user_id, degree, school, location, start_date, end_date, description, order_index) VALUES
    (
      user_uuid,
      'Bachelor of Science in Computer Science',
      'University of California',
      'Berkeley, CA',
      '2013-09-01',
      '2017-05-31',
      'Focused on software engineering and web technologies. Graduated with honors. Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering.',
      1
    ),
    (
      user_uuid,
      'Full Stack Web Development Bootcamp',
      'Code Academy',
      'Online',
      '2017-01-01',
      '2017-06-30',
      'Intensive 6-month program covering modern web development technologies including React, Node.js, and database management. Built 10+ full-stack projects.',
      2
    );

END $$;
