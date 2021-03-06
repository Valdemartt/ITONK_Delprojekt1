﻿// <auto-generated />
using System;
using Backend.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(HaandvaerkerDb))]
    [Migration("20200302124909_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Haandvaerker", b =>
                {
                    b.Property<int>("HaandvaerkerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("HVAnsaettelsedato")
                        .HasColumnType("datetime2");

                    b.Property<string>("HVEfternavn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HVFagomraade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HVFornavn")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HaandvaerkerId");

                    b.ToTable("Haandvaerkere");
                });

            modelBuilder.Entity("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Vaerktoej", b =>
                {
                    b.Property<long>("VTId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("LiggerIvtk")
                        .HasColumnType("int");

                    b.Property<int?>("LiggerIvtkNavigationVTKId")
                        .HasColumnType("int");

                    b.Property<DateTime>("VTAnskaffet")
                        .HasColumnType("datetime2");

                    b.Property<string>("VTFabrikat")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTModel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTSerienr")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VTId");

                    b.HasIndex("LiggerIvtkNavigationVTKId");

                    b.ToTable("Vaerktoej");
                });

            modelBuilder.Entity("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Vaerktoejskasse", b =>
                {
                    b.Property<int>("VTKId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("EjesAfNavigationHaandvaerkerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("VTKAnskaffet")
                        .HasColumnType("datetime2");

                    b.Property<int?>("VTKEjesAf")
                        .HasColumnType("int");

                    b.Property<string>("VTKFabrikat")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTKFarve")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTKModel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VTKSerienummer")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VTKId");

                    b.HasIndex("EjesAfNavigationHaandvaerkerId");

                    b.ToTable("Vaerktoejskasser");
                });

            modelBuilder.Entity("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Vaerktoej", b =>
                {
                    b.HasOne("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Vaerktoejskasse", "LiggerIvtkNavigation")
                        .WithMany("Vaerktoej")
                        .HasForeignKey("LiggerIvtkNavigationVTKId");
                });

            modelBuilder.Entity("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Vaerktoejskasse", b =>
                {
                    b.HasOne("F20ITONK.ASPNETCore.MicroService.ClassLib.Models.Haandvaerker", "EjesAfNavigation")
                        .WithMany("Vaerktoejskasse")
                        .HasForeignKey("EjesAfNavigationHaandvaerkerId");
                });
#pragma warning restore 612, 618
        }
    }
}
