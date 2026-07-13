import axios from "axios";
import { useEffect } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const subscriberData = Object.fromEntries(formData);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/newsletter",
      subscriberData,
    );

    return {
      success: true,
      message: response.data.message || "Subscribed successfully!",
    };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const serverErrors = error.response.data.errors;
      const firstErrorMessage = Object.values(serverErrors)[0];

      return {
        success: false,
        message: firstErrorMessage || "Validation failed.",
      };
    }

    return {
      success: false,
      message: "The server is not available. Please try again later.",
    };
  }
};

function NewsletterPage() {
  const actionData = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (!actionData) return;

    if (actionData.success) {
      toast.success(actionData.message);

      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (!actionData.success && actionData.message) {
      toast.error(actionData.message);
    }
  }, [actionData, navigate]);

  return (
    <div>
      <div>Our Newsletter</div>
      <Form method="POST" noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          disabled={isSubmitting}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          disabled={isSubmitting}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </Form>
    </div>
  );
}

export default NewsletterPage;
