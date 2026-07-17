import axios from "axios";
import { useEffect } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "./NewsletterPage.styled";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const subscriberData = Object.fromEntries(formData);

  try {
    const response = await axios.post("/api/newsletter", subscriberData);

    return {
      success: true,
      message: response.data.message || "Subscribed successfully!",
    };
  } catch (error) {
    if (error.response?.status === 400) {
      const firstErrorMessage = Object.values(
        error.response?.data?.errors || {},
      )[0];

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
    <Wrapper className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container container">
        <header className="newsletter__header">
          <p className="newsletter__eyebrow">Stay in touch</p>
          <h1 className="newsletter__title" id="newsletter-title">
            Our Newsletter
          </h1>
          <p className="newsletter__description">
            Subscribe to receive the latest recipes, cooking inspiration, and
            updates delivered straight to your inbox.
          </p>
        </header>

        <Form className="newsletter__form" method="POST" noValidate>
          <div className="newsletter__field">
            <label className="newsletter__label" htmlFor="name">
              Name
            </label>
            <input
              className="newsletter__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              disabled={isSubmitting}
            />
          </div>

          <div className="newsletter__field">
            <label className="newsletter__label" htmlFor="email">
              Email
            </label>
            <input
              className="newsletter__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </div>

          <button
            className="newsletter__button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
}

export default NewsletterPage;
