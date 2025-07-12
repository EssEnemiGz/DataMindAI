"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import { ScrollArea } from "../../components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import {
  Send,
  User,
  Plus,
  MoreHorizontal,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Sidebar,
  X,
  Edit3,
  Trash2,
  Share,
  Settings,
  LogOut,
  CreditCard,
  HelpCircle,
  Moon,
  Sun,
  GripVertical,
} from "lucide-react"
import { Link } from "react-router-dom"

// Example mock conversations
const mockConversations = [
  {
    id: "1",
    title: "Monthly summary",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "2",
    title: "Expense optimization",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
]

const suggestedPrompts = [
  "What was my net profit last month?",
  "Show me my highest expenses",
  "How does this quarter compare to the previous one?",
  "Which expense categories can I optimize?",
]

export default function ChatPage() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sidebarWidth, setSidebarWidth] = useState(260)
  const [isResizing, setIsResizing] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)
  const sidebarRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle sidebar resizing
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return

      const newWidth = e.clientX
      if (newWidth >= 200 && newWidth <= 400) {
        setSidebarWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "col-resize"
      document.body.style.userSelect = "none"
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }
  }, [isResizing])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)

    // Auto-resize textarea
    const textarea = e.target
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px"
  }

  const startNewChat = () => {
    setMessages([])
    setCurrentConversation(null)
  }

  const selectConversation = (id) => {
    setCurrentConversation(id)
    // Simulate loading messages for the conversation
    setMessages([
      {
        id: "1",
        type: "assistant",
        content: "Hello! I'm your AI accounting assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ])
  }

  const handleSuggestedPrompt = (prompt) => {
    setInputValue(prompt)
  }

  const formatTimeAgo = (date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m`
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h`
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d`
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${sidebarOpen ? "flex" : "hidden"} bg-gray-900 text-white flex-col overflow-hidden relative`}
        style={{ width: sidebarWidth }}
      >
        {/* Sidebar Header */}
        <div className="p-3 border-b border-gray-700">
          <Button
            onClick={startNewChat}
            className="w-full bg-transparent border border-gray-600 hover:bg-gray-800 text-white justify-start"
          >
            <Plus className="h-4 w-4 mr-2" />
            New conversation
          </Button>
        </div>

        {/* Conversations List */}
        <ScrollArea className="flex-1 p-2">
          <div className="space-y-1">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`group relative rounded-lg hover:bg-gray-800 transition-colors ${
                  currentConversation === conversation.id ? "bg-gray-800" : ""
                }`}
              >
                <button onClick={() => selectConversation(conversation.id)} className="w-full text-left p-3 pr-8">
                  <div className="text-sm font-medium truncate text-white">{conversation.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{formatTimeAgo(conversation.timestamp)}</div>
                </button>

                {/* Action buttons */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-gray-700">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start p-2 h-auto text-white hover:bg-gray-800">
                <div className="flex items-center space-x-3 w-full">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-sm font-medium truncate text-white">John Doe</div>
                    <div className="text-xs text-gray-400">Free Plan</div>
                  </div>
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56" side="top">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                My profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDarkMode ? "Light mode" : "Dark mode"}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="h-4 w-4 mr-2" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Resize Handle */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-gray-600 transition-colors group"
          onMouseDown={() => setIsResizing(true)}
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Sidebar className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-2">
              <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-12 w-12 text-blue-600" />
              <span className="font-semibold text-gray-900">DataMindAI</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Share className="h-4 w-4" />
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-hidden">
          {messages.length === 0 ? (
            // Empty State
            <div className="h-full flex flex-col items-center justify-center p-8">
              <div className="max-w-2xl text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-14 w-14" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">How can I help you today?</h1>
                <p className="text-gray-600 mb-8">
                  I'm your AI accounting assistant. I can analyze your financial data, generate reports, and answer questions about your business.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedPrompt(prompt)}
                      className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">{prompt}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Messages
            <ScrollArea className="h-full">
              <div className="max-w-3xl mx-auto p-4 space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="group">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-white"
                        }`}
                      >
                        {message.type === "user" ? <User className="h-4 w-4" /> : <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-8 w-8" /> }
                      </div>

                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {message.type === "user" ? "You" : "DataMindAI"}
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{message.content}</div>
                        </div>

                        {/* Message Actions */}
                        {message.type === "assistant" && (
                          <div className="flex items-center space-x-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                              <ThumbsUp className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                              <ThumbsDown className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Loading Message */}
                {isLoading && (
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-white flex items-center justify-center flex-shrink-0">
                        <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-8 w-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 mb-1">DataMindAI</div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Analyzing your data...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4 min-h-[80px]">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Send a message to DataMindAI..."
                className="min-h-[24px] max-h-[200px] resize-none border-gray-300 rounded-xl pr-12 py-3 focus:ring-0 focus:outline-none"
                disabled={isLoading}
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="sm"
                className="absolute right-2 bottom-2 h-8 w-8 p-0 rounded-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              DataMindAI may make mistakes. Please verify important information.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
