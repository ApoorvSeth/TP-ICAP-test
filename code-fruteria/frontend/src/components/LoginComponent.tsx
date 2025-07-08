import React, { useState } from "react";
import { Form, Input, Button, Typography, Alert, Card } from "antd";
import { login } from "../services/auth";

type LoginComponentProps = {
  onLoginSuccess?: () => void;
};

const LoginComponent: React.FC<LoginComponentProps> = ({ onLoginSuccess }) => {
  const [form] = Form.useForm();
  const [errorMsg, setErrorMsg] = useState("");

  const handleFinishOld = (values: { username: string; password: string }) => {
    const { username, password } = values;
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("login-success"));
      onLoginSuccess?.();
    } else {
      setErrorMsg("Invalid credentials");
    }
  };

  const handleFinish = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    try {
      await login(username, password);
      window.dispatchEvent(new Event("login-success")); // triggers Root to show App
      onLoginSuccess?.();
    } catch (err: any) {
      setErrorMsg(err.message || "Login failed");
    }
  };
  

  return (
    <div
      id="login-component"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background-color, #232b3e)",
      }}
    >
      <Card
        style={{
          minWidth: 340,
          boxShadow: "0 2px 16px #0003",
          background: "var(--background-color, #232b3e)",
          border: "1px solid #3e4a6b",
        }}
        styles={{ body: { padding: 32 } }}
      >
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: 24,
            color: "var(--text-color, #fff)",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: 2,
            textShadow: "0 1px 2px #0006",
          }}
        >
          Login
        </Typography.Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span style={{ color: "#e0e0e0", fontWeight: 500 }}>
                Username
              </span>
            }
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              autoFocus
              style={{
                background: "#232b3e",
                color: "#fff",
                border: "1px solid #3e4a6b",
              }}
              placeholder="Enter your username"
            />
          </Form.Item>
          <Form.Item
            label={
              <span style={{ color: "#e0e0e0", fontWeight: 500 }}>
                Password
              </span>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              style={{
                background: "#232b3e",
                color: "#fff",
                border: "1px solid #3e4a6b",
              }}
              placeholder="Enter your password"
            />
          </Form.Item>

          {errorMsg && (
            <Form.Item>
              <Alert message={errorMsg} type="error" showIcon />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                fontWeight: 600,
                letterSpacing: 1,
                background: "linear-gradient(90deg, #2b3556 0%, #3e4a6b 100%)",
                border: "none",
                color: "#fff",
                boxShadow: "0 2px 8px #0002",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginComponent;
