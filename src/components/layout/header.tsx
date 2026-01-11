// src/components/layout/header.tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Plus,
  User,
  Settings,
  LogOut,
  Library,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  PenTool,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

const browseCategories = [
  { label: "Browse", href: "/stories", isHeader: true },
  { label: "Romance", href: "/stories?genre=Romance" },
  { label: "Fantasy", href: "/stories?genre=Fantasy" },
  { label: "Mystery", href: "/stories?genre=Mystery" },
  { label: "Sci-Fi", href: "/stories?genre=Sci-Fi" },
  { label: "Horror", href: "/stories?genre=Horror" },
  { label: "Adventure", href: "/stories?genre=Adventure" },
  { label: "Drama", href: "/stories?genre=Drama" },
  { label: "Comedy", href: "/stories?genre=Comedy" },
  { label: "Thriller", href: "/stories?genre=Thriller" },
  { label: "Historical", href: "/stories?genre=Historical" },
  { label: "Poetry", href: "/stories?genre=Poetry" },
  { label: "Non-Fiction", href: "/stories?genre=Non-Fiction" },
];

export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/stories?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="relative">
          {/* Main Header Content */}
          <div className="h-14 sm:h-16 px-3 sm:px-6 lg:px-8">
            <div className="flex h-full items-center justify-between max-w-7xl mx-auto">
              {/* Left Section - Mobile Menu and Logo */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="sm:hidden h-8 w-8 p-0"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>

                {/* Logo with Text on Mobile, Full Logo on Desktop */}
                <Link to="/" className="flex items-center gap-2">
                  <Logo size="sm" showText={true} />
                </Link>

                {/* Browse Dropdown - Desktop Only */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                    >
                      Browse
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-56 max-h-[80vh] overflow-y-auto bg-white"
                  >
                    {browseCategories.map((category, index) =>
                      category.isHeader ? (
                        <DropdownMenuLabel
                          key={index}
                          className="font-bold text-gray-900"
                        >
                          {category.label}
                        </DropdownMenuLabel>
                      ) : (
                        <DropdownMenuItem key={index} asChild>
                          <Link to={category.href} className="cursor-pointer">
                            {category.label}
                          </Link>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Center - Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <form onSubmit={handleSearch} className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search stories, authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full rounded-full border-gray-300 focus:border-orange-400 focus:ring-orange-400 bg-gray-50"
                  />
                </form>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Mobile Search Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden h-8 w-8 p-0"
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                >
                  <Search className="h-5 w-5" />
                </Button>

                {isAuthenticated ? (
                  <>
                    {/* Write Button - Desktop */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                      asChild
                    >
                      <Link to="/stories/create">
                        <PenTool className="h-4 w-4" />
                        Write
                      </Link>
                    </Button>

                    {/* Notifications - Desktop */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:block h-8 w-8 p-0"
                    >
                      <Bell className="h-5 w-5" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 rounded-full p-0"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={user?.profile_pic || undefined}
                              alt={user?.username}
                            />
                            <AvatarFallback className="bg-orange-100 text-orange-700">
                              {user?.username?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        align="end"
                        sideOffset={5}
                      >
                        <div className="flex items-center justify-start gap-2 p-2">
                          <div className="flex flex-col space-y-1 leading-none">
                            <p className="font-medium text-sm">
                              {user?.username}
                            </p>
                            <p className="text-xs text-gray-500">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            to={`/profile/${user?.username}`}
                            className="cursor-pointer"
                          >
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/library" className="cursor-pointer">
                            <Library className="mr-2 h-4 w-4" />
                            My Library
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/my-stories" className="cursor-pointer">
                            <FileText className="mr-2 h-4 w-4" />
                            My Stories
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/stories/create"
                            className="cursor-pointer sm:hidden"
                          >
                            <PenTool className="mr-2 h-4 w-4" />
                            Write Story
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/settings" className="cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer text-red-600 hover:text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    {/* Sign In and Sign Up buttons for non-authenticated users */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm font-medium"
                      asChild
                    >
                      <Link to="/auth/login">Sign In</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="hidden sm:inline-flex bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium"
                      asChild
                    >
                      <Link to="/auth/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {mobileSearchOpen && (
            <div className="md:hidden border-t bg-white px-4 py-3">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search stories, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full rounded-full text-sm border-gray-300 bg-gray-50"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* Mobile Menu - Slide Down */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t bg-white">
              <div className="px-4 py-3 space-y-1">
                {/* Browse Section for Mobile */}
                <div className="pb-2 mb-2 border-b border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                    Browse Stories
                  </p>
                  {browseCategories.slice(1, 7).map((category, index) => (
                    <Link
                      key={index}
                      to={category.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      {category.label}
                    </Link>
                  ))}
                  <Link
                    to="/stories"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-orange-600 hover:bg-orange-50"
                    onClick={closeMobileMenu}
                  >
                    View All Categories →
                  </Link>
                </div>

                {/* Write Section for Mobile */}
                {isAuthenticated ? (
                  <div className="pb-2 mb-2 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                      Writing
                    </p>
                    <Link
                      to="/stories/create"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Story
                    </Link>
                    <Link
                      to="/my-stories"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      My Stories
                    </Link>
                  </div>
                ) : (
                  <div className="pb-2 mb-2 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                      Get Started
                    </p>
                    <Link
                      to="/auth/signup"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <PenTool className="mr-2 h-4 w-4" />
                      Sign Up to Write
                    </Link>
                  </div>
                )}

                {/* User Actions */}
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/library"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Library className="mr-2 h-4 w-4" />
                      My Library
                    </Link>
                    <Link
                      to={`/profile/${user?.username}`}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
