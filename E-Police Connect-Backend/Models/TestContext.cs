using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace E_Police_Connect.Models;

public partial class TestContext : DbContext
{
    public TestContext()
    {
    }

    public TestContext(DbContextOptions<TestContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Civilian> Civilians { get; set; }

    public virtual DbSet<Complaint> Complaints { get; set; }

    public virtual DbSet<Criminal> Criminals { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Emp> Emps { get; set; }

    public virtual DbSet<IncidentReport> IncidentReports { get; set; }

    public virtual DbSet<Officer> Officers { get; set; }

    public virtual DbSet<PrisonRecord> PrisonRecords { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;Initial Catalog=Test;Integrated Security=True;Pooling=False;Encrypt=True;Trust Server Certificate=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Civilian>(entity =>
        {
            entity.HasKey(e => e.CivilianId).HasName("PK__Civilian__951B00ADEA1182CF");

            entity.ToTable("Civilian");

            entity.Property(e => e.CivilianId)
                .ValueGeneratedNever()
                .HasColumnName("civilian_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("address");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("phone");
        });

        modelBuilder.Entity<Complaint>(entity =>
        {
            entity.HasKey(e => e.ComplaintId).HasName("PK__Complain__A771F61C4D437767");

            entity.ToTable("Complaint");

            entity.Property(e => e.ComplaintId)
                .ValueGeneratedNever()
                .HasColumnName("complaint_id");
            entity.Property(e => e.CivilianId).HasColumnName("civilian_id");
            entity.Property(e => e.DateFiled).HasColumnName("date_filed");
            entity.Property(e => e.Description)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("status");

            entity.HasOne(d => d.Civilian).WithMany(p => p.Complaints)
                .HasForeignKey(d => d.CivilianId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Complaint__civil__4D94879B");
        });

        modelBuilder.Entity<Criminal>(entity =>
        {
            entity.HasKey(e => e.CriminalId).HasName("PK__Criminal__A29D6210BCE4A3D4");

            entity.ToTable("Criminal");

            entity.Property(e => e.CriminalId)
                .ValueGeneratedNever()
                .HasColumnName("criminal_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("address");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.ArrestDate).HasColumnName("arrest_date");
            entity.Property(e => e.CrimeCommitted)
                .IsUnicode(false)
                .HasColumnName("crime_committed");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.OfficerId).HasColumnName("officer_id");

            entity.HasOne(d => d.Officer).WithMany(p => p.Criminals)
                .HasForeignKey(d => d.OfficerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Criminal__office__5070F446");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC07E3CCB57F");

            entity.ToTable("Customer");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Emp>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Emp__3214EC07F7683EC9");

            entity.ToTable("Emp");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<IncidentReport>(entity =>
        {
            entity.HasKey(e => e.ReportId).HasName("PK__Incident__779B7C58EDA48612");

            entity.ToTable("IncidentReport");

            entity.Property(e => e.ReportId)
                .ValueGeneratedNever()
                .HasColumnName("report_id");
            entity.Property(e => e.Description)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Location)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("location");
            entity.Property(e => e.OfficerId).HasColumnName("officer_id");
            entity.Property(e => e.ReportDate).HasColumnName("report_date");

            entity.HasOne(d => d.Officer).WithMany(p => p.IncidentReports)
                .HasForeignKey(d => d.OfficerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__IncidentR__offic__534D60F1");
        });

        modelBuilder.Entity<Officer>(entity =>
        {
            entity.HasKey(e => e.OfficerId).HasName("PK__Officer__AF7899979EE2D777");

            entity.ToTable("Officer");

            entity.Property(e => e.OfficerId)
                .ValueGeneratedNever()
                .HasColumnName("officer_id");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.IsDesignated).HasColumnName("is_designated");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Rank)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rank");
        });

        modelBuilder.Entity<PrisonRecord>(entity =>
        {
            entity.HasKey(e => e.PrisonId).HasName("PK__PrisonRe__7F4B2E495045D6BF");

            entity.ToTable("PrisonRecord");

            entity.Property(e => e.PrisonId)
                .ValueGeneratedNever()
                .HasColumnName("prison_id");
            entity.Property(e => e.CriminalId).HasColumnName("criminal_id");
            entity.Property(e => e.PrisonName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("prison_name");
            entity.Property(e => e.ReleaseDate).HasColumnName("release_date");
            entity.Property(e => e.SentenceYears).HasColumnName("sentence_years");

            entity.HasOne(d => d.Criminal).WithMany(p => p.PrisonRecords)
                .HasForeignKey(d => d.CriminalId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PrisonRec__crimi__5629CD9C");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
