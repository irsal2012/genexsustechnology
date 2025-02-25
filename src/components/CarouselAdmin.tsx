
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from '@/contexts/AuthContext';

export const CarouselAdmin = ({ onImageUploaded }: { onImageUploaded: () => void }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const file = formData.get('file') as File;
      const title = formData.get('title') as string;
      const altText = formData.get('altText') as string;
      const displayOrder = formData.get('displayOrder') as string;

      if (!file || !title || !altText || !displayOrder) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please fill in all fields",
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('upload-carousel-image', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });

      onImageUploaded();
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload image",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed bottom-4 right-4 z-50">
          Manage Carousel
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Upload Carousel Image</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="file">Image</Label>
            <Input id="file" name="file" type="file" accept="image/*" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altText">Alt Text</Label>
            <Input id="altText" name="altText" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="displayOrder">Display Order (1-4)</Label>
            <Input 
              id="displayOrder" 
              name="displayOrder" 
              type="number" 
              min="1" 
              max="4" 
              required 
            />
          </div>
          <Button type="submit" disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};
