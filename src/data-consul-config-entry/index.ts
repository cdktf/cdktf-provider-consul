/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulConfigEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry#id DataConsulConfigEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of config entry to read.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry#kind DataConsulConfigEntry#kind}
  */
  readonly kind: string;
  /**
  * The name of the config entry to read.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry#name DataConsulConfigEntry#name}
  */
  readonly name: string;
  /**
  * The namespace the config entry is associated with.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry#namespace DataConsulConfigEntry#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the config entry is associated with.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry#partition DataConsulConfigEntry#partition}
  */
  readonly partition?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry consul_config_entry}
*/
export class DataConsulConfigEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_config_entry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/config_entry consul_config_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulConfigEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataConsulConfigEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_config_entry',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
    };
  }
}
