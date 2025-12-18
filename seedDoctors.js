import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Doctor from './models/Doctor.js';

dotenv.config();

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const doctorsData = [
      {
        user: {
          name: "Dr. Sarah Johnson",
          email: "sarah.johnson@hospital.com",
          password: "doctor123",
          role: "doctor",
          phone: "+1-555-0101"
        },
        doctor: {
          specialization: "Cardiology",
          experience: 12,
          qualification: "MD, FACC",
          consultationFee: 200
        }
      },
      {
        user: {
          name: "Dr. Michael Chen",
          email: "michael.chen@hospital.com",
          password: "doctor123",
          role: "doctor",
          phone: "+1-555-0102"
        },
        doctor: {
          specialization: "Neurology",
          experience: 15,
          qualification: "MD, PhD",
          consultationFee: 250
        }
      },
      {
        user: {
          name: "Dr. Emily Rodriguez",
          email: "emily.rodriguez@hospital.com",
          password: "doctor123",
          role: "doctor",
          phone: "+1-555-0103"
        },
        doctor: {
          specialization: "Pediatrics",
          experience: 8,
          qualification: "MD, FAAP",
          consultationFee: 150
        }
      },
      {
        user: {
          name: "Dr. James Wilson",
          email: "james.wilson@hospital.com",
          password: "doctor123",
          role: "doctor",
          phone: "+1-555-0104"
        },
        doctor: {
          specialization: "Orthopedics",
          experience: 10,
          qualification: "MD, FAAOS",
          consultationFee: 180
        }
      },
      {
        user: {
          name: "Dr. Lisa Thompson",
          email: "lisa.thompson@hospital.com",
          password: "doctor123",
          role: "doctor",
          phone: "+1-555-0105"
        },
        doctor: {
          specialization: "Dermatology",
          experience: 7,
          qualification: "MD, FAAD",
          consultationFee: 160
        }
      }
    ];

    for (const doctorData of doctorsData) {
      // Check if user already exists
      const existingUser = await User.findOne({ email: doctorData.user.email });
      if (existingUser) {
        console.log(`User ${doctorData.user.email} already exists, skipping...`);
        continue;
      }

      // Create user
      const user = new User(doctorData.user);
      await user.save();
      console.log(`Created user: ${user.name}`);

      // Create doctor profile
      const doctor = new Doctor({
        user: user._id,
        ...doctorData.doctor
      });
      await doctor.save();
      console.log(`Created doctor profile for: ${user.name}`);
    }

    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDoctors();