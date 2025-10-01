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
  { label: "Fanfiction", href: "/stories?genre=Fanfiction" },
  { label: "Fantasy", href: "/stories?genre=Fantasy" },
  { label: "Short Story", href: "/stories?genre=Short Story" },
  { label: "Teen Fiction", href: "/stories?genre=Teen Fiction" },
  { label: "Historical Fiction", href: "/stories?genre=Historical Fiction" },
  { label: "Paranormal", href: "/stories?genre=Paranormal" },
  { label: "Editor's Picks", href: "/stories?sort=popular", isSpecial: true },
  { label: "Humor", href: "/stories?genre=Humor" },
  { label: "Horror", href: "/stories?genre=Horror" },
  { label: "Contemporary Lit", href: "/stories?genre=Contemporary Lit" },
  { label: "Diverse Lit", href: "/stories?genre=Diverse Lit" },
  { label: "Mystery", href: "/stories?genre=Mystery" },
  { label: "Thriller", href: "/stories?genre=Thriller" },
  { label: "Science Fiction", href: "/stories?genre=Science Fiction" },
  { label: "Adventure", href: "/stories?genre=Adventure" },
  { label: "Non-Fiction", href: "/stories?genre=Non-Fiction" },
  { label: "Poetry", href: "/stories?genre=Poetry" },
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
      {/* Fixed Header with Consistent White Background */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b shadow-sm"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottomColor: "#E5E7EB",
        }}
      >
        <div className="relative">
          {/* Main Header Content */}
          <div
            className="h-14 sm:h-16 px-3 sm:px-6 lg:px-8"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="flex h-full items-center justify-between max-w-7xl mx-auto">
              {/* Left Section - Mobile Menu, Logo, and Browse */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="sm:hidden h-8 w-8 p-0"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{ color: "#374151" }}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>

                {/* Logo */}
                <Logo size="sm" className="hidden sm:flex" variant="default" />
                <div className="sm:hidden">
                  <Link to="/" className="flex items-center">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-8 w-8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="mobileBookGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FF6B35" />
                          <stop offset="100%" stopColor="#FFA500" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M6 8C6 6.89543 6.89543 6 8 6H22V38H8C6.89543 38 6 37.1046 6 36V8Z"
                        fill="url(#mobileBookGradient)"
                      />
                      <path
                        d="M26 6H40C41.1046 6 42 6.89543 42 8V36C42 37.1046 41.1046 38 40 38H26V6Z"
                        fill="url(#mobileBookGradient)"
                        opacity="0.8"
                      />
                      <rect x="22" y="6" width="4" height="32" fill="#E85D04" />
                    </svg>
                  </Link>
                </div>

                {/* Browse Dropdown - Desktop Only */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                      style={{ color: "#374151" }}
                    >
                      Browse
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-56 max-h-[80vh] overflow-y-auto"
                    style={{ backgroundColor: "#FFFFFF" }}
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
                          <Link
                            to={category.href}
                            className={cn(
                              "cursor-pointer",
                              category.isSpecial &&
                                "font-semibold text-orange-600"
                            )}
                          >
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
                    className="pl-10 w-full rounded-full border-gray-300 focus:border-orange-400 focus:ring-orange-400"
                    style={{ backgroundColor: "#F9FAFB" }}
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
                  style={{ color: "#374151" }}
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* Write Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                      style={{ color: "#374151" }}
                    >
                      Write
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        to="/stories/create"
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Create a new story
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/my-stories"
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        My Stories
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {isAuthenticated ? (
                  <>
                    {/* Notifications - Hidden on Mobile */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:block h-8 w-8 p-0"
                      style={{ color: "#374151" }}
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
                            <AvatarFallback
                              style={{
                                backgroundColor: "#FED7AA",
                                color: "#7C2D12",
                              }}
                            >
                              {user?.username?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        align="end"
                        style={{ backgroundColor: "#FFFFFF" }}
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
                            to={`/users/${user?.username}`}
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
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/settings" className="cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Log out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:inline-flex text-sm font-medium"
                      style={{ color: "#374151" }}
                      asChild
                    >
                      <Link to="/auth/login">Sign In</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="text-white border-0 px-3 sm:px-4 text-sm font-medium"
                      style={{
                        background:
                          "linear-gradient(to right, #FB923C, #F97316)",
                      }}
                      asChild
                    >
                      <Link to="/auth/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {mobileSearchOpen && (
            <div
              className="md:hidden border-t px-4 py-3"
              style={{
                backgroundColor: "#FFFFFF",
                borderTopColor: "#E5E7EB",
              }}
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search stories, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full rounded-full text-sm border-gray-300"
                  style={{ backgroundColor: "#F9FAFB" }}
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* Mobile Menu - Slide Down */}
          {mobileMenuOpen && (
            <div
              className="sm:hidden border-t"
              style={{
                backgroundColor: "#FFFFFF",
                borderTopColor: "#E5E7EB",
              }}
            >
              <div className="px-4 py-3 space-y-1">
                {/* Browse Section for Mobile */}
                <div className="pb-2 mb-2 border-b border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                    Browse Stories
                  </p>
                  {browseCategories.slice(1, 8).map((category, index) => (
                    <Link
                      key={index}
                      to={category.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100",
                        category.isSpecial ? "text-orange-600" : "text-gray-700"
                      )}
                      onClick={closeMobileMenu}
                    >
                      {category.label}
                    </Link>
                  ))}
                  <Link
                    to="/stories"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={closeMobileMenu}
                  >
                    View All Genres →
                  </Link>
                </div>

                {/* Write Section for Mobile */}
                {!isAuthenticated ? (
                  <div className="pb-2 mb-2 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                      Start Writing
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
                ) : (
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
                      to={`/users/${user?.username}`}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth/login"
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/auth/signup"
                      className="block px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-orange-400 to-orange-500"
                      onClick={closeMobileMenu}
                    >
                      Sign Up Free
                    </Link>
                  </>
                )}
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
